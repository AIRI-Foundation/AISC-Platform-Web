import { api } from "../lib/api";
import type {
  Company,
  CompanySearchRequest,
  DirectoryCompanyDto,
  DirectoryFiltersDto,
} from "../types/api";

// Turns a raw API item into the shape Directory.tsx/CompanyCard already expect.
// Locked (category-only) companies come back from the API with name/description/
// financials etc. set to null - we surface that as hasFullProfile=false and let
// the card component decide how to render the placeholder/blur state.
function mapDirectoryDtoToCompany(dto: DirectoryCompanyDto): Company {
  const badges = dto.hasFullProfile && dto.certificationBadge
    ? [dto.certificationBadge, dto.categoryTag]
    : [dto.categoryTag];

  return {
    id: dto.id,
    name: dto.name ?? "",
    description: dto.description ?? "",
    logoUrl: dto.logoUrl ?? "",
    hasFullProfile: dto.hasFullProfile,
    isVerified: dto.isVerified,
    levelBadge: dto.levelBadge,
    stage: dto.stage ?? "",
    location: [dto.city, dto.province].filter(Boolean).join(", "),
    categories: badges,
    revenue: dto.annualRevenue ?? 0,
    funding: dto.fundingRaised ?? 0,
    aiscScore: dto.aiscScore ?? 0,
    profileLink: `/company/${dto.id}`,
  };
}

// "All Categories" / "All Canada" / "All Stages" / "All" are the dropdown
// placeholders used by Directory.tsx - translate them to "no filter".
function toQueryParam(value: string, sentinel: string): string | undefined {
  return value === sentinel ? undefined : value;
}

export async function searchDirectory(
  filters: CompanySearchRequest,
  page = 1,
  pageSize = 12,
): Promise<{ companies: Company[]; totalCount: number }> {
  const level = filters.spectrum === "All"
    ? undefined
    : Number(filters.spectrum.replace("L", ""));

  const res = await api.get("/api/Directory/search", {
    params: {
      Q: filters.search || undefined,
      Level: level,
      Category: toQueryParam(filters.category, "All Categories"),
      Location: toQueryParam(filters.location, "All Canada"),
      Stage: toQueryParam(filters.stage, "All Stages"),
      Page: page,
      PageSize: pageSize,
    },
  });

  const paged = res.data.data as { items: DirectoryCompanyDto[]; totalCount: number };

  return {
    companies: paged.items.map(mapDirectoryDtoToCompany),
    totalCount: paged.totalCount,
  };
}

export async function getDirectoryFilters(): Promise<DirectoryFiltersDto> {
  const res = await api.get("/api/Directory/filters");
  return res.data.data as DirectoryFiltersDto;
}

export async function getDirectoryCompany(id: string): Promise<Company> {
  const res = await api.get(`/api/Directory/${id}`);
  return mapDirectoryDtoToCompany(res.data.data as DirectoryCompanyDto);
}

import { api } from "../lib/api";
import type { AddCompanyRequest, 
  CompanySearchRequest,
  Company
 } from "../types/api";
import { mockCompanies } from "../components/data/MockDatabaseEntities";

export async function addCompany(body: AddCompanyRequest) {
  const res = await api.post("/api/Company", body);
  return res.data;
}

// export async function searchCompanies(
//   filters: CompanySearchRequest
// ): Promise<Company[]> {
//     const res = await api.post(
//       "/api/Companies/search",
//       filters
//     );

//     return res.data.data;
// }
export async function searchCompanies(
  filters: CompanySearchRequest
): Promise<Company[]> {

  const results = mockCompanies.filter((company) => {

  const matchesSearch =
    filters.search === "" ||
    (
      !isRestrictedCompany(company) &&
      company.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    );


    const matchesSpectrum =
      filters.spectrum === "All" ||
      company.spectrum === filters.spectrum;


    const matchesCategory =
      filters.category === "All Categories" ||
      company.categories.some(
        categories =>
          categories.toLowerCase() === filters.category.toLowerCase()
      );


    const matchesLocation =
      filters.location === "All Canada" ||
      (
        !isRestrictedCompany(company) &&
        company.location === filters.location
      );


    const matchesStage =
      filters.stage === "All Stages" ||
      (
        !isRestrictedCompany(company) &&
        company.stage === filters.stage
      );


    return (
      matchesSearch &&
      matchesSpectrum &&
      matchesCategory &&
      matchesLocation &&
      matchesStage
    );
  });


  return new Promise<Company[]>((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 500);
  });
}

function isRestrictedCompany(company: Company) {
  return company.spectrum === "L1" || company.spectrum === "L2";
}
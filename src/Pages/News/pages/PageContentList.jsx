import { useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../../../Components/Breadcrumb";
import Sidebar from "../components/SidebarNews";
import Pagination from "../../../Components/Pagination";
import ComponentsContentList from "../components/ComponentsContentList";

import {
  normalizeData,
  getUniqueYears,
  filterByYearAndSearch,
  updateParams,
  updateMultipleParams,
} from "../../../utils/helper";

const PageContentList = ({
  data = [],
  breadcrumbPaths = [],
  defaultPerPage = 8,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const selectedYear = searchParams.get("year") || "";
  const page = Number(searchParams.get("page") || 1);
  const perPage = Number(searchParams.get("limit") || defaultPerPage);

  //  DATA
  const normalizedData = useMemo(() => normalizeData(data), [data]);

  const filteredData = useMemo(
    () => filterByYearAndSearch(normalizedData, selectedYear, q, lang),
    [normalizedData, selectedYear, q, lang],
  );

  const years = useMemo(() => getUniqueYears(normalizedData), [normalizedData]);

  //  PAGINATION
  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

  useEffect(() => {
    if (page > totalPages) {
      updateParams(searchParams, setSearchParams, "page", totalPages);
    }
  }, [page, totalPages, searchParams, setSearchParams]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredData.slice(start, start + perPage);
  }, [filteredData, page, perPage]);

  //  CATEGORY
  const categories = [
    { path: "/berita", label: "news" },
    { path: "/agenda", label: "agenda" },
    { path: "/prestasi/akademik", label: "Prestasi Akademik" },
    { path: "/prestasi/ekstrakurikuler", label: "Prestasi Ekstrakurikuler" },
  ];

  return (
    <div className="flex flex-col items-center py-36 px-5 md:px-10 lg:px-20">
      <Breadcrumb paths={breadcrumbPaths} />

      <div className="flex flex-col w-full max-w-5xl sm:flex-row py-10 gap-10">
        {/* SIDEBAR */}
        <div className="w-full sm:w-1/3">
          <Sidebar
            years={years}
            activeYear={selectedYear}
            searchText={q}
            categories={categories}
            onSearchChange={(value) => {
              updateMultipleParams(searchParams, setSearchParams, {
                q: value,
                page: 1,
              });
            }}
            onYearChange={(year) => {
              updateMultipleParams(searchParams, setSearchParams, {
                year,
                page: 1,
              });
            }}
            onClearFilters={() => setSearchParams({}, { replace: true })}
          />
        </div>

        {/* CONTENT */}
        <section className="w-full sm:w-2/3 flex flex-col gap-10">
          <ComponentsContentList data={paginatedData} layout="list" />

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) =>
              updateParams(searchParams, setSearchParams, "page", p)
            }
          />
        </section>
      </div>
    </div>
  );
};

export default PageContentList;

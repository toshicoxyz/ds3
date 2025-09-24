// src/services/productService.ts
// import * as XLSX from "xlsx";
// import type { Product } from "../data";

// export async function loadProducts(): Promise<Product[]> {
//   const res = await fetch("/data/products.xlsx");
//   const arrayBuffer = await res.arrayBuffer();
//   const workbook = XLSX.read(arrayBuffer, { type: "array" });
//   const sheet = workbook.Sheets[workbook.SheetNames[0]];
//   const rows: Product[] = XLSX.utils.sheet_to_json(sheet);

//   return rows.map((row) => ({
//     sku: row.sku,
//     brand: row.brand,
//     category: row.category,
//     name: row.name,
//     price: row.price ? Number(row.price) : null,
//     images: row.images ? row.images.split(" | ") : [],
//     mainFeatures: row.mainFeatures ? row.mainFeatures.split(" | ") : [],
//     downloads: row.downloads
//       ? row.downloads.split(" | ").map((d: string) => {
//           const [label, url] = d.split(": ");
//           return { label, url, icon: "fas fa-file-pdf" }; // default icon
//         })
//       : [],
//     specifications: row.specifications
//       ? row.specifications.split(" | ").map((s: string) => {
//           const [label, value] = s.split(": ");
//           return { label, value };
//         })
//       : [],
//   }));
// }

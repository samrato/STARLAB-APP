// this function will convert the crated to this format ""may 2023

export function formatMemberSince(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("dafault", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

// this function will convert it to may 15 2023

export function formatPublishDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("dafault", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day} ${year}`;
}

const extractFileNameFromUrl = (url: string): string => {
  // URLの最後のスラッシュ以降を取得
  const fileName = url.split("/").pop() || "";

  // クエリパラメータやハッシュを除去
  return fileName.split("?")[0].split("#")[0];
};

// Markdown画像構文から画像ファイル名を抽出
export const extractImageFileNames = (content: string): string[] => {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  const matches = content.matchAll(imageRegex);

  const fileNames: string[] = [];

  for (const match of matches) {
    const url = match[1].trim();
    const fileName = extractFileNameFromUrl(url);

    fileNames.push(fileName);
  }

  return fileNames;
};

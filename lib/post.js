import path from "path";
import fs from "fs";
import matter from "gray-matter";

// process.cwd()：current directory. route directory. 全てのdirectoryを指している
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory); //postsDirectoryの中身をオブジェクトの配列として返す
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //拡張子.mdを取り除く

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); //utf8で文字列として認識することができる

    const matterResult = matter(fileContents); //マークダウンファイルのオブジェクトが配列として入っている

    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

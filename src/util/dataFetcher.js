export default async function dataFetcher(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data.data.children.map(item => item.data);
}
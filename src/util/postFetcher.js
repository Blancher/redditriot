export default async function postFetcher(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data.map(data => data.data.children.map(state => state.data));
}
// Korea Company Financials & Risk API — quick start (Node 18+, built-in fetch).
// Set RAPIDAPI_KEY to the key shown on korea-company-financials-risk at rapidapi.com after subscribing to the free plan.
const HOST = "korea-company-financials-risk.p.rapidapi.com";
const KEY = process.env.RAPIDAPI_KEY;

async function call(path) {
  const res = await fetch(`https://${HOST}${path}`, {
    headers: { "X-RapidAPI-Key": KEY, "X-RapidAPI-Host": HOST },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// Search by name, corporate number or business registration number
call("/v1/companies/search?q=Samsung%20Electronics&per_page=3").then((d) => console.log(JSON.stringify(d, null, 2).slice(0, 2000)));

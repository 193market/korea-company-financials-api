# Korea Company Financials & Risk API

Financial summaries (2019-2025) and distress signals for 260,000+ Korean corporations, from FSC and DART data.

**Try it (free tier, no card):** [https://rapidapi.com/193market/api/korea-company-financials-risk](https://rapidapi.com/193market/api/korea-company-financials-risk) · also on [api.market](https://api.market/store/193market/korea-company-financials-risk)

Financial summaries (2019-2025) for about 260,000 Korean audited corporations -- sales, operating profit, net income, assets, liabilities, equity, debt ratio -- joined with company registry data (English name, business registration number, address, listing status, auditor) and DART filings that signal financial distress (default, court rehabilitation filing, dissolution, business suspension). Government-sourced data as English JSON.

## Who uses it

Credit and supplier-risk teams with Korean counterparties, market-entry and M&A analysts, KYB platforms adding Korean financials.

## Quick start

Subscribe to the free BASIC plan on RapidAPI, copy your `X-RapidAPI-Key`, then:

```bash
curl "https://korea-company-financials-risk.p.rapidapi.com/v1/companies/search?q=Samsung%20Electronics&per_page=3" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: korea-company-financials-risk.p.rapidapi.com"
```

Python and Node examples are in [`examples/`](examples/). Both read the key from the `RAPIDAPI_KEY` environment variable.

Other calls worth trying:
- What the dataset covers (free): `GET /v1/coverage`
- Code tables (free): `GET /v1/codes`

## Example response

`GET /v1/companies/search?q=Samsung%20Electronics&per_page=3` — Search by name, corporate number or business registration number:

```json
{
  "total": 7,
  "page": 1,
  "per_page": 3,
  "results": [
    {
      "crno": "1301110006246",
      "business_registration_number": "1248100998",
      "name": "SAMSUNG ELECTRONICS CO,.LTD",
      "name_en": "SAMSUNG ELECTRONICS CO,.LTD",
      "name_ko": "삼성전자(주)",
      "address": "경기도 수원시 영통구  삼성로 129 (매탄동)",
      "phone": "02-2255-0114",
      "fax": "031-200-7538",
      "homepage": "www.samsung.com/sec",
      "industry_ko": null,
      "main_business_ko": null,
      "established_on": "1969-01-13",
      "fiscal_year_end_month": "12",
      "market": "유가",
      "market_code": "P",
      "listing": {
        "kospi": {
          "listed_on": null,
          "delisted_on": null
        },
        "kosdaq": {
          "listed_on": null,
          "delisted_on": null
        },
        "krx_other": {
          "listed_on": null,
          "delisted_on": null
        }
      },
      "is_sme": null,
      "main_bank_ko": null,
      "employee_count": 128881,
      "avg_tenure_years": 13.7,
      "avg_annual_salary_krw": 158000000,
      "auditor_ko": "삼정회계법인",
      "audit_opinion_ko": "적정의견",
      "company_info_updated_at": "2025/12/01"
    },
    {
      "crno": "1311110482726",
      "business_registration_number": "1528700753",
      "name": "SAMSUNG ELECTRONICS MECHANICS CO LTD",
      "name_en": "SAMSUNG ELECTRONICS MECHANICS CO LTD",
      "name_ko": "삼성전기(주)",
      "address": "경기도 성남시 분당구 서현로 184",
      "phone": "82-070-4126-7839",
      "fax": null,
      "homepage": null,
      "industry_ko": null,
      "main_business_ko": null,
      "established_on": "2017-05-19",
      "fiscal_year_end_month": null,
      "market": null,
      "market_code": null,
      "listing": {
        "kospi": {
          "listed_on": null,
          "delisted_on": null
        },
        "kosdaq": {
          "listed_on": null,
          "delisted_on": null
        },
        "krx_other": {
          "listed_on": null,
          "delisted_on": null
        }
      },
      "is_sme": null,
      "main_bank_ko": null,
      "employee_count": 0,
      "avg_tenure_years": null,
      "avg_annual_salary_krw": 0,
      "auditor_ko": null,
  ...
}
```

## Endpoints

| Method | Path | What it does | Parameters (* required) |
|---|---|---|---|
| GET | `/health` | Health check |  |
| GET | `/v1/companies/search` | Search companies by name, crno (법인등록번호) or business registration number | `q`*, `market`, `page`, `per_page` |
| GET | `/v1/companies/{crno}` | Company profile with its 2 most recent financial years and distress-event counts | `crno`* |
| GET | `/v1/companies/{crno}/financials` | Full yearly financial history for a company (2019-2025) | `crno`*, `year_from`, `year_to`, `page`, `per_page` |
| GET | `/v1/companies/{crno}/distress-events` | DART filings for this company that signal financial distress | `crno`*, `page`, `per_page` |
| GET | `/v1/coverage` | What this dataset does and does not cover (free) |  |
| GET | `/v1/codes` | Market and distress-event code tables (free) |  |

The full OpenAPI 3 specification is in [`openapi.json`](openapi.json).

## Plans

| Plan | Price | Included per month |
|---|---|---|
| BASIC | free | a small monthly quota for evaluation |
| PRO / ULTRA / MEGA | from $49 / month | 1,000+ requests, per-request overage, higher rate limits |

Current prices are always on the [RapidAPI pricing page](https://rapidapi.com/193market/api/korea-company-financials-risk/pricing). Error responses (4xx/5xx) are not charged on api.market.

## Data source and licence

Financial Services Commission of Korea, company financial summaries and company registry (data.go.kr 15043459, 15043184, no usage restriction); Financial Supervisory Service DART filings of four distress kinds (default, rehabilitation filing, dissolution, business suspension), facts and dates only.

Every response carries an `attribution` object naming the source and the changes made (translation, normalisation, filtering, aggregation). This API is an independent product and is not affiliated with or endorsed by any government agency or regulator.

## Support

Questions, missing fields, or a use case the current plans do not fit: open an issue in this repository or use the Discussions tab on the RapidAPI listing.

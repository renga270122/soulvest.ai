# Soulvest.ai Namecheap And Google Setup

This document captures the recommended DNS and verification sequence for Soulvest.ai when the domain is managed in Namecheap and the site is deployed with GitHub Pages.

## 1. GitHub Pages DNS

Add these records in Namecheap under Advanced DNS for the apex domain:

- Type: `A`
  Host: `@`
  Value: `185.199.108.153`
- Type: `A`
  Host: `@`
  Value: `185.199.109.153`
- Type: `A`
  Host: `@`
  Value: `185.199.110.153`
- Type: `A`
  Host: `@`
  Value: `185.199.111.153`

Optional IPv6 support:

- Type: `AAAA`
  Host: `@`
  Value: `2606:50c0:8000::153`
- Type: `AAAA`
  Host: `@`
  Value: `2606:50c0:8001::153`
- Type: `AAAA`
  Host: `@`
  Value: `2606:50c0:8002::153`
- Type: `AAAA`
  Host: `@`
  Value: `2606:50c0:8003::153`

For the `www` host, add a `CNAME` that points to the GitHub Pages target configured for the repository, typically `yourusername.github.io`.

Do not keep conflicting parking, forwarding, or duplicate `www` records.

## 2. GitHub Pages Repository Settings

In the GitHub repository settings:

1. Open `Settings > Pages`.
2. Confirm the custom domain matches the intended host.
3. Keep the existing `CNAME` file unless the canonical host is intentionally changed.
4. Enable HTTPS enforcement after DNS propagation completes.

## 3. Google Search Console Verification

Add the verification record supplied by Google as a TXT record:

- Type: `TXT`
  Host: `@`
  Value: `google-site-verification=...`

After propagation:

1. Add the domain property `soulvest.ai` in Google Search Console.
2. Verify the domain.
3. Submit `https://soulvest.ai/sitemap.xml`.

## 4. Google Workspace MX Records

When Google Workspace is ready, use custom MX records in Namecheap:

- Priority `1` `ASPMX.L.GOOGLE.COM`
- Priority `5` `ALT1.ASPMX.L.GOOGLE.COM`
- Priority `5` `ALT2.ASPMX.L.GOOGLE.COM`
- Priority `10` `ALT3.ASPMX.L.GOOGLE.COM`
- Priority `10` `ALT4.ASPMX.L.GOOGLE.COM`

Remove conflicting old MX records before applying Google mail routing.

## 5. SPF, DKIM, And DMARC

SPF:

- Type: `TXT`
  Host: `@`
  Value: `v=spf1 include:_spf.google.com ~all`

DKIM:

- Generate the DKIM record in Google Admin.
- Add the exact selector and TXT value that Google provides.

DMARC:

- Type: `TXT`
  Host: `_dmarc`
  Value: `v=DMARC1; p=none; rua=mailto:soulvest1111@gmail.com; adkim=s; aspf=s`

Start with `p=none`. Move to stricter enforcement only after mail flow is confirmed.

## 6. Recommended Order

1. Clean Namecheap DNS for GitHub Pages.
2. Confirm `soulvest.ai` and `www.soulvest.ai` both load over HTTPS.
3. Verify Search Console.
4. Submit the sitemap.
5. Retry Google Workspace.
6. Add MX, SPF, DKIM, and DMARC after approval.

## 7. Common Mistakes To Avoid

- Keeping old parking or redirect records active.
- Leaving conflicting `www` records in place.
- Adding Google MX without removing old MX entries.
- Expecting immediate HTTPS before GitHub validates the domain.
- Publishing strict DMARC before confirming outbound mail works.
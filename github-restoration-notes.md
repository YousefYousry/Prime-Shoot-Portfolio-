# Latest GitHub Source Restoration Notes

The latest public GitHub `main` branch contains the intended pre-local-edit version of `client/src/pages/Home.tsx` and `client/src/index.css`.

`Home.tsx` on GitHub uses the original per-load randomized gallery order, without the later Mondrian grid variants or Social Media lead-tile changes. It also contains the published hero layout, brand logo paths under `/assets/brand/`, and current contact information.

Direct raw GitHub stylesheet retrieval was rate-limited on the second source request. The repository file view confirms that `client/src/index.css` exists on `main`; the local stylesheet will be restored from the repository source through the authenticated repository session rather than from the rate-limited raw endpoint.

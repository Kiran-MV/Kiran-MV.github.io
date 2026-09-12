# Birthday RSVP Invitation

A free-to-host birthday invitation page with an RSVP form. It is designed for GitHub Pages and can send responses through a free form service.

## Customize the invitation

Edit `index.html` and update:

- Child name
- Date and time
- Venue
- Google Maps link
- Party details

## Connect RSVP responses for free

### Current setup: FormSubmit

The RSVP form is currently connected to FormSubmit:

```js
const RSVP_ENDPOINT = "https://formsubmit.co/kiranmutturu@gmail.com";
```

After the first RSVP submission, FormSubmit will send an activation email to that address. Confirm it once, then future RSVP submissions will be emailed to you.

### Alternative: Formspree

1. Create a free form at https://formspree.io/.
2. Copy the form endpoint.
3. Paste it into `RSVP_ENDPOINT` in `script.js`.

### Alternative: Google Forms

Create a Google Form for RSVP responses and replace the `RSVP now` link in `index.html` with the Google Form link. This is the simplest way to collect responses in a spreadsheet.

## Test locally

Open `index.html` directly in a browser, or run:

```sh
npx serve .
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `birthday-rsvp-invite` under `Kiran-MV`.
2. Push this folder to the repository.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Set **Source** to **Deploy from a branch**.
6. Select branch `main` and folder `/root`.
7. Save.

The site will be available at:

```txt
https://kiran-mv.github.io/birthday-rsvp-invite/
```

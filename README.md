# HEADBANGER

## Description: 4 to 5 sentences in non-technical speak summarizing the features, functions, and goals.

- HEADBANGER is a punk/metal music review site. The main page features summaries of recent reviews of various bands in the scene. Navigate to a specific review to read about an album, check out a music video, or leave your own comments.
  - !!!!!NEED TO FINISH UPDATING DESCRIPTION!!!!!

## Wireframes: A link or screenshot to your whimisical mockups of your app on desktop and mobile.

- https://whimsical.com/headbanger-Py3Qd4SPcURwDwZFaz33WR

## Component Hierarchy: A link or screenshot to your whimisical visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.

- !!!!!NEED TO ADD COMPONENTS!!!!!

## API: How you will be using Airtable to handle your data, as well as a sample data pull from your Airtable database.

- I will be using Airtable to store data about the reviews and to get and post comments.

#### Airtable code snippet:

{
"id": "recMOsqkKNY6ORuyB",
"fields": {
"band-name": "test",
"album-name": "test",
"review-text": "test",
"review-source": "test",
"album-picture": "test"
}
}

{
"fields": {
"username": "test",
"comment": "test"
}
}

## MVP & PostMVP

### MVP: Your goals for MVP, including the minimum, need-to-have features of your app.

- Music review site created with React, utilizing React Router, with at least 6 components, deployed via Netlify.
- Via Axios, get reviews from Airtable and get/post comments.
- Style full app, including either flexbox, Grid, or a component library, as well as integrating responsive designs/media queries.

* Minimum 50 commits.

### Post-MVP: Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete. (If you plan to use a component library, please link that here as well.)

- Embed music videos on review pages.
- Utilize Eventbrite API (or similar) to post upcoming shows.
- Integrate a Spotify or YouTube playlist (either displayed in-app or linking externally).
- Create ability for end user to post their own music reviews.

## Project Schedule: Lay out your timeline for your project, from proposal to deployment.

| Day       | Deliverable                                         |   Status   |
| --------- | --------------------------------------------------- | :--------: |
| Oct 21    | Pitch Drafting / Wireframes                         | Incomplete |
| Oct 22-24 | Pitch Approval / Initial Setup / Get/Post Data Flow | Incomplete |
| Oct 25    | Component Creation / Populate Airtable              | Incomplete |
| Oct 26    | Primary CSS Styling / MVP Complete                  | Incomplete |
| Oct 27    | PostMVP Integration                                 | Incomplete |
| Oct 28    | Final CSS Touches                                   | Incomplete |
| Oct 29    | Presentations                                       | Incomplete |

## Timeframes: Estimate out how much time you'll need for each part of your project! This will help you determine your schedule as well as how to prioritize certain features.

| Component                                     | Priority | Estimated Time | Time Invested |
| --------------------------------------------- | :------: | :------------: | :-----------: |
| Proposal                                      |    H     |     3 HRS      |     3 HRS     |
| Airtable setup                                |    H     |     .5 HR      |               |
| Airtable data population                      |    H     |     2 HRS      |               |
| Create component structure (high-level)       |    H     |      1 HR      |               |
| Navbar component population                   |    H     |     .5 HR      |               |
| Header/About component population             |    H     |     .5 HR      |               |
| Create review component - home page large     |    H     |     2 HRS      |               |
| Create review component - home page small     |    H     |      1 HR      |               |
| Create review component - separate page       |    H     |     2 HRS      |               |
| Create review component - separate page add'l |    H     |      1 HR      |               |
| Link Airtable to review components            |    H     |     2 HRS      |               |
| Populate data in review components            |    H     |     3 HRS      |               |
| Create band name header                       |    H     |     .5 HR      |               |
| Populate band name header w/ Airtable data    |    H     |      1 HR      |               |
| Create video component                        |    L     |      1 HR      |               |
| Link video embed                              |    L     |      1 HR      |               |
| Create comments component                     |    H     |     2 HRS      |               |
| Link comments to Airtable - GET & POST        |    H     |     2 HRS      |               |
| CSS - review component - home page large      |    H     |     2 HRS      |               |
| CSS - review component - home page small      |    H     |     2 HRS      |               |
| CSS - review component - separate page        |    H     |     2 HRS      |               |
| CSS - review component - separate page add'l  |    H     |     2 HRS      |               |
| CSS - headers/nav                             |    H     |      1 HR      |               |
| CSS - comment section                         |    H     |     2 HRS      |               |
| CSS - flexbox                                 |    H     |     3 HRS      |               |
| CSS - misc                                    |    L     |     3 HRS      |               |
| Total                                         |          |     43 HRS     |               |

## SWOT Analysis: Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?

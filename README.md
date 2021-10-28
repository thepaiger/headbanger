# HEADBANGER

## Description

- HEADBANGER is a punk/metal music review site. The main page features summaries of reviews of various bands in the scene. Navigate to a specific review to read about an album, check out a music video, or leave your own comments.

## Wireframes

- https://whimsical.com/headbanger-wireframes-Py3Qd4SPcURwDwZFaz33WR

## Component Hierarchy: A link or screenshot to your whimisical visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.

- https://whimsical.com/headbanger-components-kWaY9gYW7fhKELUqs6b5Z

## API

- I will be using Airtable to store data about the reviews and to get and post comments.

#### Airtable code snippet

```
{
    "records": [
        {
            "id": "recMOsqkKNY6ORuyB",
            "fields": {
                "review-source": "test",
                "album-name": "test",
                "album-picture": "test",
                "review-text": "test",
                "band-name": "test"
            },
            "createdTime": "2021-10-22T02:41:41.000Z"
        },
        {
            "id": "recMOsqkKNY6ORuyB",
            "fields": {
                "review-source": "test",
                "album-name": "test",
                "album-picture": "test",
                "review-text": "test",
                "band-name": "test"
            },
            "createdTime": "2021-10-22T02:41:41.000Z"
        }
    ]
}

{
    "records": [
        {
            "id": "recIbyOFRke2rWkqk",
            "fields": {
                "username": "test",
                "comment": "test"
            },
            "createdTime": "2021-10-22T02:45:08.000Z"
        },
        {
            "id": "recIbyOFRke2rWkqk",
            "fields": {
                "username": "test",
                "comment": "test"
            },
            "createdTime": "2021-10-22T02:45:08.000Z"
        }
    ]
}
```

## MVP & PostMVP

### MVP

- Music review site created with React, utilizing React Router, with at least 6 components, deployed via Netlify.
- Via Axios, get reviews from Airtable and get/post comments.
- Style full app, including either flexbox, Grid, or a component library, as well as integrating responsive designs/media queries.
- Minimum 50 commits.

### Post-MVP

- Embed music videos on review pages.
- Utilize Eventbrite API (or similar) to post upcoming shows.
- Integrate a Spotify or YouTube playlist (either displayed in-app or linking externally).
- Create ability for end user to post their own music reviews.

## Project Schedule

| Day       | Deliverable                                         |   Status   |
| --------- | --------------------------------------------------- | :--------: |
| Oct 21    | Pitch Drafting / Wireframes                         |  Complete  |
| Oct 22-24 | Pitch Approval / Initial Setup / Get/Post Data Flow |  Complete  |
| Oct 25    | Component Creation / Populate Airtable              |  Complete  |
| Oct 26    | Primary CSS Styling / MVP Complete                  |  Complete  |
| Oct 27    | PostMVP Integration (where time is available)       |  Complete  |
| Oct 28    | Final CSS Touches                                   | Incomplete |
| Oct 29    | Presentations                                       | Incomplete |

## Timeframes

| Component                                    | Priority | Estimated Time | Time Invested |
| -------------------------------------------- | :------: | :------------: | :-----------: |
| Proposal                                     |    H     |     3 HRS      |    4.5 HRS    |
| Airtable setup                               |    H     |     .5 HRS     |    .5 HRS     |
| Connect & populate Airtable data             |    H     |     5 HRS      |    4.5 HRS    |
| Create component structure (high-level)      |    H     |      1 HR      |     2 HRS     |
| Navbar component population                  |    H     |     .5 HRS     |    .5 HRS     |
| Header/About component population            |    H     |     .5 HRS     |    .5 HRS     |
| Create review components                     |    H     |     6 HRS      |     3 HRS     |
| Link Airtable to review components           |    H     |     2 HRS      |     3 HRS     |
| Populate data in review components           |    H     |     3 HRS      |     3 HRS     |
| Create band name header                      |    H     |     .5 HRS     |    .5 HRS     |
| Populate band name header w/ Airtable data   |    H     |      1 HR      |    .5 HRS     |
| Create video component                       |    L     |      1 HR      |    .5 HRS     |
| Link video embed                             |    L     |      1 HR      |     1 HR      |
| Create comments component                    |    H     |     2 HRS      |     1 HR      |
| Link comments to Airtable - GET & POST       |    H     |     2 HRS      |    2.5 HR     |
| CSS - review component - home page large     |    H     |     2 HRS      |    3.5 HRS    |
| CSS - review component - home page small     |    H     |     2 HRS      |    1.5 HR     |
| CSS - review component - separate page       |    H     |     2 HRS      |     2 HRS     |
| CSS - review component - separate page add'l |    H     |     2 HRS      |    2.5 HRS    |
| CSS - headers/nav                            |    H     |      1 HR      |    1.5 HRS    |
| CSS - comment section                        |    H     |     2 HRS      |     2 HRS     |
| CSS - flexbox                                |    H     |     3 HRS      |     3 HRS     |
| CSS - misc                                   |    L     |     3 HRS      |               |
| Total                                        |    H     |     46 HRS     |   43.5 HRS    |

## SWOT Analysis

- Strengths:
  - CSS, overall understanding of project goals, strong jumping-off point with wireframes
- Weaknesses:
  - Still working on understanding React
- Opportunities:
  - Potential to learn to embed videos & playlists
- Threats:
  - Time, potential for being overly ambitious for the timeline

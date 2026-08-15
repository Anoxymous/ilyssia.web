const timelinedata = `

|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Start | End   | Category | Who             | Title                      | Notes                                                                                               |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 09:00 | 14:00 | Schedule | SCH             | Getting Ready              |                                                                                                     |
| 14:00 | 15:30 | Schedule | SCH             | Pre-Wedding Photos         |                                                                                                     |
| 15:30 | 16:00 | Schedule | SCH             | Guests Arrive              |                                                                                                     |
| 16:00 | 16:15 | Schedule | SCH             | Blessing Ceromony          |                                                                                                     |
| 16:15 | 17:15 | Schedule | SCH             | Canapies & Guest Photos    |                                                                                                     |
| 17:15 | 18:00 | Schedule | SCH             | Wedding Ceromony           |                                                                                                     |
| 18:00 | 20:00 | Schedule | SCH             | Reception - Dinner         |                                                                                                     |
| 20:00 | 23:00 | Schedule | SCH             | Reception - Party          |                                                                                                     |
| 13:15 | 13:30 | Sequence |                 | Travel to Marina           |                                                                                                     |
| 13:30 | 14:00 | Sequence |                 | Boarding                   |                                                                                                     |
| 14:00 | 14:30 | Sequence |                 | Heading Out                |                                                                                                     |
| 14:30 | 15:00 | Sequence |                 | Anchored                   |                                                                                                     |
| 15:00 | 15:30 | Sequence |                 | Heading In                 |                                                                                                     |
| 15:30 | 16:00 | Sequence |                 | Disembark                  |                                                                                                     |
| 16:00 | 16:05 | Sequence |                 | Procession                 |                                                                                                     |
| 16:05 | 16:15 | Sequence |                 | Well wishes                |                                                                                                     |
| 16:20 | 16:30 | Sequence | BPM,P&V         | Photos - Wedding Party     |                                                                                                     |
| 16:30 | 16:40 | Sequence | BPM,P&V         | Photos - Michells Family   |                                                                                                     |
| 16:40 | 16:50 | Sequence | BPM,P&V         | Photos - Tims Family       |                                                                                                     |
| 16:50 | 17:00 | Sequence | BPM,P&V         | Photos - Friends           |                                                                                                     |
| 17:00 | 17:15 | Sequence | BPT,CEL         | Ceremony Setup             |                                                                                                     |
| 17:15 | 17:20 | Sequence |                 | Celebrant stuff            |                                                                                                     |
| 17:20 | 17:30 | Sequence |                 | Moon-rise                  | 17:20 - Moon-rise, 17:30 ~ Moon Visible, 17:35 - Sun-set                                            |
| 17:30 | 17:35 | Sequence |                 | Sun-set                    | 17:20 - Moon-rise, 17:30 ~ Moon Visible, 17:35 - Sun-set                                            |
| 17:35 | 17:45 | Sequence |                 | Celebrant stuff            |                                                                                                     |
| 17:45 | 17:50 | Sequence |                 | Sparkeler Exit             |                                                                                                     |
| 18:05 | 18:30 | Sequence | BPM,P&V         | Doors Open Find Tables     |                                                                                                     |
| 18:30 | 19:00 | Sequence | BPM,P&V         | Dinner Service Starts      | Speeches between courses (5 speakers × 5 minutes maximum)                                           |
| 19:00 | 19:45 | Sequence | MC              | Speeches                   | Best Man, Maid of Honour, FoB, PoG, Groom                                                           |
| 19:45 | 19:55 | Sequence |                 | Cut the Cake               | Cut the Cheese                                                                                      |
| 20:00 | 20:10 | Sequence |                 | First Dance                |                                                                                                     |
| 20:10 | 20:50 | Sequence |                 | Guests Dance               |                                                                                                     |
| 20:50 | 21:00 | Sequence |                 | Bouque Toss                |                                                                                                     |
| 21:00 | 21:05 | Sequence |                 | Photographers leaves       |                                                                                                     |
| 21:05 | 21:15 | Sequence |                 | Serve Cake                 |                                                                                                     |
| 22:45 | 23:00 | Sequence |                 | Hard Stop                  |                                                                                                     |
| 09:00 | 12:30 | Bride    | BPM,HMU         | Hair and Make-up start     | Michelle to Confirm start time with Pete. Must finish by 12:30                                      |
| 12:30 | 12:45 | Bride    | BPM             | Room tidy                  | Room tidied, Everyone gets dressed in robes, dress hung, details laid out                           |
| 12:45 | 13:00 | Bride    | BPM             | Relax                      | Champagne & snacks                                                                                  |
| 13:00 | 13:45 | Bride    | BPM,P&V         | Bride Getting Ready Photos | Photographer arrives! (shortened by 30 mins)                                                        |
| 13:45 | 13:55 | Bride    | BPM,P&V         | Travel to Marina           |                                                                                                     |
| 10:00 | 13:45 | Grooms   | BPM,P&V         | Get Dressed                |                                                                                                     |
| 13:45 | 13:55 | Grooms   | BPM,P&V         | Travel to Marina           |                                                                                                     |
| 20:15 | 20:20 | Grooms   |                 | Ily Goes to Bed            |                                                                                                     |
| 13:55 | 14:30 | Bride    | BPM,BPT,P&V     | Photosheet Marina          | Was 14:30                                                                                           |
| 14:30 | 16:00 | Bride    | BPM,BPT,P&V,N&C | Yacht Photo Shoot          | (1 1/2 hrs on boat)                                                                                 |
| 14:30 | 16:00 | Bride    | BPM,BPT,P&V,N&C | Yacht Photo Shoot          | (1 1/2 hrs on boat)                                                                                 |
| 16:00 | 16:15 | Bride    | BPM,BPT,P&V,N&C | Blessing Ceremony          |                                                                                                     |
| 16:00 | 16:15 | Bride    | BPM,BPT,P&V,N&C | Blessing Ceremony          |                                                                                                     |
| 17:55 | 18:05 | Bride    | MC,BPE          | Quiet Moment               |                                                                                                     |
| 16:30 | 17:00 | Bride    | ALL             | Group Photo's              |                                                                                                     |
| 17:15 | 17:20 | Bride    | BPE,BPM,FOB     | Isle Walk                  | Down the isle - Flower girls & Pages, brides maides, Bride and FOB                                  |
| 18:30 | 17:50 | Bride    |                 | Dinner                     |                                                                                                     |
| 19:20 | 19:50 | MC       | MC              | Speeches                   | Best Man, Maid of Honour, FoB, PoG, Groom                                                           |
| 19:50 | 20:00 | Bride    |                 | Get Changed                |                                                                                                     |
| 20:00 | 20:15 | Bride    |                 | First Dance                |                                                                                                     |
| 16:00 | 16:15 | Music    | BND             | Soloist - Bridal Entrance  | Play someting for our arival                                                                        |
| 16:15 | 17:00 | Music    | BND             | Soloist                    |                                                                                                     |
| 17:15 | 17:20 | Music    | BPE,BPM,FOB     | Soloist - Isle Walk        | Play the walk down the isle                                                                         |
| 17:45 | 17:50 | Music    |                 | Soloist - Ceremony Exit    |                                                                                                     |
| 18:10 | 18:55 | Music    | BND             | Band Set 1 - Dinner        |                                                                                                     |
| 20:10 | 20:50 | Music    | BND             | Band Set 2 - Pump up jams  |                                                                                                     |
| 21:10 | 21:55 | Music    | BND             | Band Set 3                 |                                                                     |
| 13:00 | 13:10 | Photos   | BPM,P&V         | Detail photos              | Rings, invitations, shoes, jewellery, perfume, dress, bouquet                                       |
| 13:10 | 13:20 | Photos   | BPM,P&V         | Bridesmaids assit          | With bridesmaids candid shots, Champagne/toast                                                      |
| 13:20 | 13:35 | Photos   | BPM,P&V         | Getting into dress         | With your Maid of Honour and Mama. Shoes, jewellery (from envelope) and veil.                       |
| 13:35 | 13:45 | Photos   | BPM,P&V         | Bridal portraits           | Bouquet, dress, shoes and hair details                                                              |
| 13:45 | 13:55 | Photos   | BPM,P&V         | Mama and Daughter          | Ilyssia sees me in the wedding dress for the first time.<br> She helps hold the bouquet and sits together for quiet, natural photos.<br>Reading her a little note: <br> Ask to capture a 'letter to my daughter' moment. While wearing your dress, sit with Ilyssia on your lap and quietly tell her something like: 'One day you'll look back at these photos and know that you weren't just at our wedding, you were part of our love story from the very beginning.'      |
| 13:55 | 14:05 | Photos   | BPM,P&V         | First Look                 | First look with Tim                                                                                 |
| 14:05 | 14:30 | Photos   | BPM,P&V         | Marina Shoot               | Photos around the Marina before yacht departure                                                     |
| 14:30 | 16:00 | Photos   | BPM,P&V         | Yatch Shoot                | Photos around the Marina before yacht departure                                                     |
| 14:30 | 16:00 | Photos   | BPM,P&V         | Yatch Shoot                | Wedding party photos on yacht.<br>Ideas: <br>- The Bridesmaids/Groomsmen are on the sheets, helm, scrubbing the deck. Tim and Michelle in romantic (or titanic) embrace                                                      |
| 16:00 | 16:20 | Photos   | BPM,P&V         | Blessing Ceremony          | - Bride and Groom entering the arch <br> - Group Photo? <br> -  Candid photos with the guests greeting the arrival of the couple                              |
| 16:20 | 16:30 | Photos   | BPM,P&V         | Groups - Wedding Party     | maids & groooms & flower girls & pages & mc (+ jenny) & parents, flower girls + pages, both parents + ily |                         |
| 16:30 | 16:40 | Photos   | BPM,P&V         | Groups - Michells Family   | full family, parents                              |
| 16:40 | 16:50 | Photos   | BPM,P&V         | Groups - Tims Family       | full family, parents & siblings, parents                             |
| 16:50 | 17:00 | Photos   | BPM,P&V         | Groups - Friends           | just friends, the philipino girls, maids+grooms + parners, newcastle crew, climbers and hikers, group photo          |
| 17:15 | 17:45 | Photos   | BPM,P&V         | Civil Ceremony             | Sparkler and bubble machine exit after ceremony          |
| 17:45 | 18:15 | Photos   | BPM,P&V         | Couples and Guests         | Couple photos inside reception          |
| 18:15 | 18:20 | Photos   | BPM,P&V         | Wedding party entrance     |                                                                     |
| 18:20 | 18:25 | Photos   | BPM,P&V         | Bride & Groom entrance     |                                                                     |
| 18:30 | 19:50 | Photos   | BPM,P&V         | Dinner served              | Speeches between courses (5 speakers × 5 minutes maximum)           |
| 20:30 | 21:00 | Photos   |                 | Photobombs                 |                                                                     |
| 20:50 | 21:00 | B&G      |                 | Cake Cutting               |                                                                     |
| 21:55 | 22:00 | B&G      |                 | Garter Throw               |                                                                     |
| 22:10 | 22:15 | B&G      |                 | Father Daughter Dance      |                                                                     |
| 22:15 | 22:55 | Music    | BND             | Band Set 4 - wind down     |                                                                     |
| 22:30 | 22:35 | B&G      |                 | Bride & Groom Send Off     |                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
`

const timeline_whodata = `
|-------------------------------------|
| Code | Label                        |
|-------------------------------------|
| BPM  | Bridal Party - Michelle      |
| BPT  | Bridal Party - Tim           |
| BPE  | Bridal Party - Extras        |
| P&V  | Photographer & Videogrpaher  |
| HMU  | Make-up Artist               |
| BND  | Wedding Band                 |
| SOL  | Soloist                      |
| N&C  | Nate & Charlotte             |
| MCR  | MC (Rob)                     |
| CEL  | Celebrant                    |
| FOB  | Father of the bride          |
| SCH  | Schedule                     |
`
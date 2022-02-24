import sanityClient from '@sanity/client'


export const client = sanityClient({
  projectId: 'h39th5bx',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'sk9Wuq6rpYn5ZTwPsvtvLcGjQ2vq4CIC2lGbZj6FWqAbdimynA5KQibQ4zClqFGdV4TwvzDQ8pAViihxXyhDH2MWDUnErp9kxHak8PzUeqCCLYQbI5cGfc58nHclznOzojKtqWBg7S22AUisHibFmVnwNOr4nPosboCJTPOLxVQPqX0QEBgL',
  useCdn: false,
  
})
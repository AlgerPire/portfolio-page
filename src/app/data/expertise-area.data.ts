import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import {
  site,
  api,
  mobile,
  monitor,
  speed,
  search,
  chevronUp,
  learn,
  debug,
  database,
  security
} from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: api,
    percent: 'Back-End Development',
    name: 'Java / Spring Boot '
  },
  {
    icon: site,
    percent: 'Front-End Development',
    name: 'TypeScript / Angular'
  },
  // {
  //   icon: mobile,
  //   percent: '70%',
  //   name: 'Mobile Development'
  // },
  {
    icon: database,
    percent: 'Databases',
    name: 'SQL / NoSQL',
  },
  {
    icon: debug,
    percent: 'Testing',
    name: 'JUnit / Mockito',
  },
  {
    icon: security,
    percent: 'Security',
    name: 'JWT / OAuth',
  },
  // {
  //   icon: speed,
  //   percent: '75%',
  //   name: 'Performance Optimization'
  // },
  // {
  //   icon: search,
  //   percent: '20%',
  //   name: 'Unit Testing'
  // },
]

export default expertiseAreaData

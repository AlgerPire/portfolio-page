import { ProfileSchema } from "@data/schema/profile.schema";

const profileData: ProfileSchema = {
  name: 'Alger Pire',
  bio: 'Enthusiastic software developer / Spring Boot / Angular ',
  resumeLink: `cv.pdf`,
  greetings: [
    'Hello world',
    'Hej världen',
    'Bonjour le monde',
    'Hola mundo',
    'こんにちは世界',
    'Hallo welt',
    'Ciao mondo'
  ],
  pronouns: 'He/him/his'

}
export default profileData

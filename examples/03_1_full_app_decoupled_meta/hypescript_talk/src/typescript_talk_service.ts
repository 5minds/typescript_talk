import {Logger} from 'loggerhythm';
import {AudienceResponse, IAudience, ITalkService} from 'talk_contracts';

export class TypescriptTalkService implements ITalkService {

  public presentSomething(audience: IAudience): void {

    const logger: Logger = Logger.createLogger('typescript_talk');
    const response: AudienceResponse = audience.tell('Typescript is really cool');

    switch (response) {
      case AudienceResponse.Great:
        logger.info('no more flowers please\n');
        break;
      case AudienceResponse.Medium:
        logger.info(`yup, that's about it\n`);
        break;
      case AudienceResponse.Bad:
        logger.info('yeah, well... no\n');
        break;
      default:
        logger.error('where is the audience o_O\n');
        break;
    }
  }

}

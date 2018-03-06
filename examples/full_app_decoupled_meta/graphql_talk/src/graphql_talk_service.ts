import {Logger} from 'loggerhythm';
import {AudienceResponse, IAudience, ITalkService} from 'talk_contracts';

export class GraphQlTalkService implements ITalkService {

  public presentSomething(audience: IAudience): void {

    const logger: Logger = Logger.createLogger('graphql_talk');
    const response: AudienceResponse = audience.tell('GraphQl is cool too');

    switch (response) {
      case AudienceResponse.Great: logger.info('told ya\n');
        break;
      case AudienceResponse.Medium: logger.info(`it's more fun if you use it yourself\n`);
        break;
      case AudienceResponse.Bad: logger.info('whatever dude\n');
        break;
      default: logger.error('where is the audience o_O\n');
        break;
    }
  }

}

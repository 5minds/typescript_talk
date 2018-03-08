// interface IReportingService {
//   generateReport(message: string): void;
//   sendReport(message: string): boolean;
// }

class ReportingComponent {

  private reportingService: any;

  constructor(service: any) {
    this.reportingService = service;
  }

  public generateReport(message: string): void {
    this.reportingService.generateReport(message);
  }

}

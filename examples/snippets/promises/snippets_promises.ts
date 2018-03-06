class ReportingComponent {

  private reportingService: any;

  constructor(service: any) {
    this.reportingService = service;
  }

  public generateReport(message: string): void {
    this.reportingService.generateReport(message);
  }

  public sendReport(message: string): Promise<boolean> {
    return new Promise((resolve: Function, reject: Function): void => {
      try {
        this.reportingService.sendReport(message);
      } catch (error) {
        reject(error);
      }
      resolve(true);
    });
  }

  public handleMessage(message: string) {
    //example
    this.sendReport(message).then()
  }

}

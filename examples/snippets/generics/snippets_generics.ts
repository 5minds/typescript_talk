class ReportingComponent {

  private reportingService: any;

  constructor(service: any) {
    this.reportingService = service;
  }

  // private identity(arg: any): any {
  //   return arg;
  // }

  private identity<T>(arg: T): T {
    return arg;
  }

  public generateReport(message: string): void {
    //this.identity<string>('string');
    //let test: boolean = this.identity('string')

    this.reportingService.generateReport(message);
  }

}

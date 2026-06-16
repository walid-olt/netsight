/**
 * A formatter class for handling dates and currency with localization.
 */
export class DataFormatter {
  private readonly locale: string;
  private readonly dateFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  /**
   * @param locale - BCP 47 language tag (e.g., 'fr-MA', 'en-US')
   */
  constructor(locale: string = "fr-MA") {
    this.locale = locale;
  }

  /**
   * Formats a date into yy-mm-dd format based on the locale.
   */
  public formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.locale, this.dateFormat).format(date);
  }

  /**
   * Formats a number into the specified currency (default MAD).
   */
  public formatCurrency(amount: number, currency: string = "MAD"): string {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  }
}

/**
 * Describes a contact using TsDoc
 *
 * @remark
 *
 * This is a great remark!
 */
export default interface Contact {
  /** unique id of contact */
  id: string | number;
  /** First name of contact */
  firstName: string;
  /** Last name of contact */
  lastName: string;
  /** Email of contact */
  email: string;
}

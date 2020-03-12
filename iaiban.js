/*==================================================================*/
/* Calculation of the check digits for an IBAN account number.      */
/* Programming language: JavaScript (ECMA-262).                     */
/* Call parameters: iban - IBAN account number with any placeholder */
/*                         instead the check digits.                */
/* Return values: the check digits for the presented IBAN number.   */
/* Implemented by: Ihar S. Areshchankau, 2019.                      */
/* Usage license: MIT (https://mit-license.org/).                   */
/*------------------------------------------------------------------*/
/* Вычисление ключа для номера счёта IBAN.                          */
/* Язык программирования: JavaScript (ECMA-262).                    */
/* Вызов: iban - номер счёта IBAN с любым заполнителем на месте     */
/*               контрольных разрядов.                              */
/* Возврат: ключ номера счёта или null в случае ошибки.             */
/* Реализовал: Игорь Сергеевич Орещенков, 2019.                     */
/* Лицензия на использование: MIT (https://mit-license.org/).       */
/*==================================================================*/
function iaCalculateIBANCheckDigits (iban)
{
	var i, n, a;
	var abc="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	n = 0;
	for (i = 4; i < iban.length; i++) {
		a = abc.indexOf (iban.charAt (i));
		n = ((a < 10? 10: 100) * n + a) % 97;
	}
	for (i = 0; i < 2; i++) {
		a = abc.indexOf (iban.charAt (i));
		n = ((a < 10? 10: 100) * n + a) % 97;
	}
	n = 98 - (n * 100 % 97);
	return (n < 10? "0": "") + String (n);
}

package lab2;

/**
 * 
 * This class was created to test the legitimacy of checks and looks for
 * counterfeit common signals.
 * 
 * @author Brandon James
 *
 */
public class CheckValidator
{

	public static boolean isCounterfeit(String string)
	{
		boolean nonvalid = false;
		int zeroCount = 0, nonZeroCount = 0;
		String regex = "\\d{10}";
		if (!string.matches(regex) || string.length() != 10)
		{
			nonvalid = true;
		}
		else
		{
			for (int i = 0; i < string.length(); i++)
			{
				if (string.charAt(i) == '0')
				{
					zeroCount++;
					nonZeroCount = 0;
				}
				else
				{
					nonZeroCount++;
					zeroCount = 0;
				}
				if (zeroCount >= 3 || nonZeroCount >= 4)
				{
					nonvalid = true;
					break;
				}
			}
		}
		return nonvalid;
	}
}

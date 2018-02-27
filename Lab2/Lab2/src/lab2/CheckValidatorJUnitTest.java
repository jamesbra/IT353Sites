/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package lab2;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author BillyLim
 */
public class CheckValidatorJUnitTest {

    public CheckValidatorJUnitTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    @Test
    public void testCheckNumberLength() {
        // assertEquals asserts that the two args have equal value
        // Since the check num is not 10-digit long, should return true (i.e. counterfeit)
        assertEquals(CheckValidator.isCounterfeit("123"), true);
    }

    @Test
    public void test2Zeros3NonZeros() {
        // 10 digits (boundary condition), no 3 or more consecutive 0's nor 4 or more consecutive non-0's. Thus, not counterfeit
        // This number also tests the boundary conditions for 2 consecutive zeros (OK) and three consecutive non-0's (OK)
        assertEquals(CheckValidator.isCounterfeit("1230012300"), false);
    }

    @Test
    public void test11Digits() {
        // 11 digits (boundary condition). Thus, counterfeit
        assertEquals(CheckValidator.isCounterfeit("12300123001"), true);
    }

    @Test
    public void test3Zeros() {
        // 10 digits, 3 or more consecutive 0's. Thus, counterfeit
        assertEquals(CheckValidator.isCounterfeit("1230001234"), true);
    }

    @Test
    public void test4NonZeros() {
        // 10 digits, 4 or more consecutive non-0's. Thus, counterfeit
        assertEquals(CheckValidator.isCounterfeit("1230012340"), true);
    }

    @Test
    public void testNonDigit() {
        // 10 chars, non-digit. Thus, counterfeit
        assertEquals(CheckValidator.isCounterfeit("abc00abc00"), true);
    }
}

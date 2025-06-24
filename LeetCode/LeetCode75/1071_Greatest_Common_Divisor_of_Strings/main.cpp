#include <string>
#include <iostream>
#include <numeric> // gcd 함수를 위한 헤더
using namespace std;

class Solution
{
public:
    string gcdOfStrings(string str1, string str2)
    {
        // 두 문자열이 같은 패턴으로 이루어져 있는지 확인
        // 두 문자열을 서로 다른 순서로 합쳤을 때 같아야 공통 약수가 존재함
        if (str1 + str2 != str2 + str1)
            return ""; // 공통 약수가 없는 경우 빈 문자열 반환

        int len1 = str1.size();
        int len2 = str2.size();
        int gcdLength = gcd(len1, len2); // 두 문자열 길이의 최대공약수 계산

        // 최대공약수 길이만큼의 접두사가 두 문자열의 "최대공약수 문자열"
        return str1.substr(0, gcdLength);
    }

    // 유클리드 알고리즘을 사용하여 최대공약수(GCD) 계산
    int gcd(int a, int b)
    {
        while (b != 0)
        {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
};

int main()
{
    Solution s;
    cout << s.gcdOfStrings("ABAB", "AB") << '\n';    // 기대결과: "AB"
    cout << s.gcdOfStrings("ABCABC", "ABC") << '\n'; // 기대결과: "ABC"
    cout << s.gcdOfStrings("LEET", "CODE") << '\n';  // 기대결과: ""
    return 0;
}
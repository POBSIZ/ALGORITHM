#include <string>
#include <iostream>
using namespace std;

class Solution
{
public:
    string mergeAlternately(string word1, string word2)
    {
        int maxLength = (word1.length() > word2.length()) ? word1.length() : word2.length();
        string result;
        for (int i = 0; i < maxLength; i++)
        {
            if (i < word1.length())
                result += word1[i];
            if (i < word2.length())
                result += word2[i];
        }
        return result;
    }
};

int main()
{
    Solution s;
    cout << s.mergeAlternately("abc", "pqr") << '\n'; // 기대결과: "apbqcr"
    cout << s.mergeAlternately("ab", "pqrs") << '\n'; // 기대결과: "apbqrs"
    cout << s.mergeAlternately("abcd", "pq") << '\n'; // 기대결과: "apbqcd"
    return 0;
}
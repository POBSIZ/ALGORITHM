package LeetCode.LeetCode75.p1768

class Solution {
    fun mergeAlternately(word1: String, word2: String): String {
        val maxLength = if (word1.length > word2.length) word1.length else word2.length
        return List(maxLength) { "" }.foldIndexed("", { i, acc, c ->
            acc + (word1.getOrNull(i) ?: c) + (word2.getOrNull(i) ?: c)
        })
    }
}

fun main() {
    println(
        Solution().mergeAlternately("ab", "pqrs")
    )
}
words = ['level', 'noon', 'mom', 'happy', 'ssafy', 'life']

function palindrome(word) {
  // word가 회문인지 아닌지 판별
  for (let i = 0; i < word.length; i++) {
		if (word[i] === word[word.length-(i+1)]){
			continue
		} else {
			console.log('false')
			return 
		}
	}
	console.log('true')
}

for (const word of words) {
  console.log(palindrome(word))
}

// 출력 예시
// true
// true
// true
// false
// false
// false

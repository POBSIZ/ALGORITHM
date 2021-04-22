#include <iostream>
using namespace std;

int main(){
	int N, Fnum, Snum, sumNum, newNum, countNum = 0;
	cin >> N;
	if(N < 10){
		N *= 10;
	}
	newNum = N;
	while(true){
		Fnum = newNum/10; 
		Snum = newNum%10;
		sumNum = Fnum + Snum;
		if(sumNum>=10){
			sumNum = sumNum%10;
		}
		newNum = (Snum*10)+sumNum;
		countNum ++;
		if(newNum == N){
			break;
		}
	}
	cout << countNum;
}


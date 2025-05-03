#include <iostream>
using namespace std;

int main(){
	int H, M, rMin;

	cin >> H >> M;
	
	if((M - 45) < 0){
		H -= 1;
		if(H < 0){
			H = 23;
		}
		rMin = (60 + M) - 45;
	}else{
		rMin = M - 45;
	}
	
	cout << H << " " << rMin;
	
}


#include <iostream>
using namespace std;

int main(){
	int N, X, listNum;
	cin >> N >> X;
	for(int i=0; i<N; i++){
		cin >> listNum;
		if(X > listNum){
			cout << listNum << " ";
		}
	}
}


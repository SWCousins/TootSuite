import requests
import sys

list = open("wordlist.txt").read()
sub_domains = list.splitlines()

for x in sub_domains:
    first = f"http://{x}.{sys.argv[1]}"

    try:
        requests.get(first)

    except requests.ConnectionError:
        pass

    else:
        print("Found Valid Domain: ", first)
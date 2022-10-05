import sys
import socket
import pyfiglet

ip = '192.168.1.11'
open_ports = []

ports = range(1, 65535)

def probe_port(ip, port, result = 1):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)
        r = sock.connect_ex((ip, port))
        if r == 0:
            result = r
        sock.close()
    except Exception as e:
        pass
    return result

for port in ports:
    sys.stout.flush()
    response = probe_port(ip, port)
    if response == 0:
        open_ports.append(port)

if open_ports:
    print ("Open Ports are: ")
    print (sorted(open_ports))
else:
    print("No open ports found.")
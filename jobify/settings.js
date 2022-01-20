import {
  _SERVER_PROTOCOL_,
  _SERVER_IP_ADDRESS_,
  _SERVER_PORT_NUMBER_,
} from "@env";


let serverProtocol, hostname_ip, serverPort;

if (_SERVER_PROTOCOL_) {
  serverProtocol = _SERVER_PROTOCOL_;
} else {
  serverProtocol = "http://";
}

if (_SERVER_IP_ADDRESS_) {
  hostname_ip = _SERVER_IP_ADDRESS_;
} else {
  hostname_ip = "127.0.0.1";
}

const reservedPort = ["80", "443"];
if (_SERVER_PORT_NUMBER_ && !reservedPort.includes(_SERVER_PORT_NUMBER_)) {
  serverPort = `:${_SERVER_PORT_NUMBER_}`;
} else {
  if (_SERVER_PORT_NUMBER_ === "80") {
    serverProtocol = "http://";
    serverPort = "";
  } else if (_SERVER_PORT_NUMBER_ === "443") {
    serverProtocol = "http://";
    serverPort = "";
  }
}

const server_url = `${serverProtocol}${hostname_ip}${serverPort}`;

export default {
  protocol: serverProtocol,
  ip: hostname_ip,
  port: serverPort,
  // environment,
  url: server_url,
};

This project consists of an API generates fake security events, one server pulls the fake security events and sends them to fluent bit where the events are filtered as needed. Then the filtered and non-filtered events are saved to a .txt file

To replicate download the project files or clone the repository. Start de docker daemon and run the command:
`docker-compose up --build`

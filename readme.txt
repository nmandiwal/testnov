pre-requisits:

1. local machine (tested on mac) with jenkins, docker, kubernetes installed.

steps to run:
1. create a jenkins job of pipline type and configure to take the pipeline script from this git repo.
2. run the job
3. curl localhost:30080 and response should be hello message. 
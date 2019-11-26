pipeline {
  environment {
    registry = "mandiwal/testnov"
    registryCredential = 'dockerhub_id'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/nmandiwal/testnov.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
          sh """
          kubectl delete deployment node-test || TRUE
          kubectl apply -f kube.yaml
          sleep 5
          curl -v http://localhost:30080
          kubectl delete deployment node-test || TRUE
        """
        }
      }
    }
    
    
  }
}
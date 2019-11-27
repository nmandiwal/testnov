pipeline {
  environment {
    registry = "mandiwal/nicknode"
    //registryCredential = 'dockerhub_id'
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
            sed -i '' 's/nicknodeTAG/$BUILD_NUMBER/g' kube.yaml
            kubectl apply -f kube.yaml
            sleep 5
            curl http://localhost:30080
          """
        }
      }
    }
  }
}
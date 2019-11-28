pipeline {
  environment {
    registry = "mandiwal/nicknode"
    //registryCredential = 'dockerhub_id'
    dockerImage = ''
    kubeIP = '192.168.64.3'
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
            sh ''
          //dockerImage = docker.build registry + ":$BUILD_NUMBER"
          sh """
            eval \$(minikube docker-env)
            docker build -t $registry:$BUILD_NUMBER .
            sed -i '' 's/nicknodeTAG/$BUILD_NUMBER/g' kube.yaml
            kubectl config use-context minikube
            kubectl apply -f kube.yaml
            curl -m 5 curl `minikube ip`
          """
        }
      }
    }
  }
}
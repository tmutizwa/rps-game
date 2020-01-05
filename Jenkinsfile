pipeline {
    agent { docker { image 'node:6.3' } }
    environment {
        CI = 'true'
    }
    stages {
        stage('Start') {
            steps {
                sh 'npm i'
            }
        }
      
        stage('Build'){
          steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', fingerprint: true
        }
    }
}
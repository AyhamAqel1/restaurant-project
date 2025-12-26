pipeline {
    agent any

    stages {
        stage('Build & Deploy with Docker Compose') {
            steps {
                sh '''
                cd $WORKSPACE
                docker-compose down || true
                docker-compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully'
        }
        failure {
            echo 'Deployment failed'
        }
    }
}

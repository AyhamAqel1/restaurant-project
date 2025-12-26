pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AyhamAqel1/restaurant-project.git'
            }
        }

        stage('Build & Deploy with Docker Compose') {
            steps {
                sh '''
                cd /home/ayham/restaurant-project
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

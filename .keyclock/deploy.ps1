az group create --name "keycloak-group" --location "canadacentral"

az container create --resource-group "keycloak-group"  --file keycloak.azure.yaml
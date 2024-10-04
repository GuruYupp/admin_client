#!/usr/bin/env sh

tenant=$1;
env=$2;

if [ "$tenant" = "" ] && [ "$env" = "" ]; then
   echo -e "\e[31m\e[1mError:\e[0m invalid command please use below command"
   echo -e "\e[1mnpm run start [tenant] [environment] \e[0m"
   exit 1  # Exit with a non-zero status indicating an error
fi

tenants=("herogotv" "master")
environments=("beta" "prod")

# Flag to track if value is tenant_found
tenant_found=0
# Flag to track if value is env_found
env_found=0


# Iterate through the tenants array

if [ "$tenant" = "" ]; then
   echo -e "\e[31m\e[1mError:\e[0m tenant value is not provided"
   exit 1  # Exit with a non-zero status indicating an error
fi

for valid_tenant in "${tenants[@]}";do
  if [[ "$valid_tenant" == "$tenant" ]];then
     tenant_found=1
     break
   fi
done

# Check the tenant_found
if [ "$tenant_found" -eq 1 ]; then
    echo -e "\e[32m\e[1mSuccess:\e[0m $tenant is valid tenant."
else
    echo -e "\e[31m\e[1mError:\e[0m provided tenant value is invalid"
    exit 1  # Exit with a non-zero status indicating an error
fi

#----------------------------------------------------------------------

if [ "$env" = "" ]; then
   echo -e "\e[31m\e[1mError:\e[0m environment value is not provided"
   exit 1  # Exit with a non-zero status indicating an error
fi

# Iterate through the tenants array
for valid_env in "${environments[@]}";do
  if [[ "$valid_env" == "$env" ]];then
     env_found=1
     break
   fi
done

# Check the env_found
if [ "$env_found" -eq 1 ]; then
    echo -e "\e[32m\e[1mSuccess:\e[0m $env is valid environment."
else
    echo -e "\e[31m\e[1mError:\e[0m provided environment value is invalid"
    exit 1  # Exit with a non-zero status indicating an error
fi

#----------------------------------------------------------


printf "\n"
echo -e "\e[32m\e[1m--------------- configurations are done executing scripts ---------------------\e[0m"
printf "\n"

#----------------------------------------------------------------------

NEXT_PUBLIC_TENANT=$tenant NEXT_PUBLIC_ENVIRONMENT=$env next dev


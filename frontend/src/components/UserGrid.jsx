// import React from 'react'
import { Flex, Grid, Spinner, Text } from "@chakra-ui/react"
import UserCard from "./UserCard"
import { useEffect, useState } from "react"
import { span } from "framer-motion/client"
import { BASE_URL } from "../App"

const UserGrid = ({users, setUsers}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(BASE_URL + "/friends")
        const data = await res.json()

        if(!res.ok) {
          throw new Error(data.error)
        }
        setUsers(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getUsers()
  },[setUsers])
  
  console.log(users)
  return (
    <>
      <Grid 
        templateColumns = 
        {{ base:"1fr", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)" }} gap={4}
      >
        {users.map((user) => (
            <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
      </Grid>

      {/* it's loading */}
      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {/* if it's not loading */}
      {!isLoading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={span} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Poor you! 😔
            </Text>
            No friends found
          </Text>
        </Flex>
      )}  
    </>
  )
}

export default UserGrid
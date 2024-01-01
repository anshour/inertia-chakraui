import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Box, Center, Text } from "@chakra-ui/react";

export default function Page({
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <Box minH="100vh" bg="gray.800" color="white">
                <Center minH="100vh">
                    <Box>
                        <Text fontWeight={500} fontSize="3xl" mb="2">
                            Laravel + Inertia + React + Chakra UI
                        </Text>
                        <Box
                            rounded="md"
                            border="1px solid"
                            borderColor="blue.300"
                            p="3"
                        >
                            <Text>Laravel Version : {laravelVersion}</Text>
                            <Text>PHP Version : {phpVersion}</Text>
                            <Text>Inertia Version : 1.0.14</Text>
                            <Text>React Version : 18.2.0</Text>
                            <Text>Vite Version : 5.0.10</Text>
                        </Box>
                    </Box>
                </Center>
            </Box>
        </>
    );
}

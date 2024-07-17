class Main {

    public static void main(String[] args) {

        // create a variable of string type
        String name = "Programiz";

        // checks if name is instance of String
        boolean result1 = name instanceof String;
        System.out.println("name is an instance of String: " + result1);

        // create an object of Main
        Main obj = new Main();

        // checks if obj is an instance of Main
        boolean result2 = obj instanceof Main;
        System.out.println("obj is an instance of Main: " + result2);
    }
}

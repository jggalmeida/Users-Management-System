SELECT [Id],
        [UserId],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM [dbo].[users]
WHERE [UserId] = @UserId
AND [Password] = @Password;
